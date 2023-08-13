import selectFile from '@/utils/selectFIle';
import throttle from '@/utils/throttle';
import { useDebounce, useDebounceFn } from 'ahooks';
import { Button, Card, ColorPicker, Empty, Form, FormInstance, Input, InputNumber, QRCode, QRCodeProps, Radio, Result, Slider, Space, Spin, Switch, Tabs, Upload } from 'antd';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import styles from './index.module.scss';
import qrcodeParser from 'qrcode-parser';

const initialValues: QRCodeProps = {
    value: '',
    errorLevel: 'M',
    bordered: true,
    size: 200,
    color: '#000'
}

const GenQr = () => {
    const formRef = useRef<FormInstance<QRCodeProps>>(null);
    const qrRef = useRef<HTMLDivElement>(null);


    const [value, setValue] = useState<QRCodeProps>({
        value: ''
    });

    const handleDownload = () => {
        const canva = qrRef.current?.querySelector('canvas');
        if (!canva) return;
        const url = canva.toDataURL();
        const a = document.createElement('a');
        a.download = `QRCode-${value?.value || ''}.png`;
        a.href = url;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }


    const handleChange = useDebounceFn(() => {
        const result = formRef.current?.getFieldsValue();
        if (result?.value) {
            setValue(result);
        }
    }, { wait: 500 })

    return <>
        <Form<QRCodeProps> initialValues={initialValues} ref={formRef} onValuesChange={(_, v) => {
            if (v.iconSize && v.size && Math.floor((v.size / 3)) < v.iconSize) {
                formRef.current?.setFieldValue('iconSize', Math.floor((v.size / 3)));
            }

            if (v?.value)
                handleChange.run();
        }}>
            <Form.Item name='value' label="信息">
                <Input.TextArea maxLength={500} showCount />
            </Form.Item>
            <Form.Item name='errorLevel' label="二维码纠错等级">
                <Radio.Group options={['L', 'M', 'Q', 'H']} />
            </Form.Item>
            <Form.Item valuePropName='checked' name='bordered' label="是否有边框">
                <Switch />
            </Form.Item>
            <Form.Item name='color' label="二维码颜色" normalize={(v) => typeof v === 'string' ? v : v?.toHexString?.()}>
                <ColorPicker showText={true} presets={[{ label: '纯色', colors: ['#000'] }]} />
            </Form.Item>
            <Form.Item name='size' label="二维码大小">
                <Slider min={200} max={600} />
            </Form.Item>
            <Form.Item name='icon' extra={<Button type='link' size='small' onClick={async () => {
                const result = await selectFile(".jpeg,.png,.jpg,.svg");
                if (result) {
                    const blobUrl = URL.createObjectURL(result);
                    formRef.current?.setFieldValue('icon', blobUrl);
                }
            }}>选择图片</Button>} label="二维码中央图标URL">
                <Input />
            </Form.Item>
            <Form.Item noStyle shouldUpdate={(pv: QRCodeProps, cv: QRCodeProps) => {
                return pv?.size !== cv?.size;
            }}>
                {(form) => <Form.Item name='iconSize' label="二维码中央图标大小">
                    <Slider max={Math.floor((form?.getFieldValue('size') || 200) / 3)} min={20} />
                </Form.Item>}
            </Form.Item>
        </Form>
        <div ref={qrRef}>
            {!!value.value && <>
                <Button onClick={handleDownload}>下载图片</Button>
                <QRCode bgColor='#FFF' type='canvas' {...value} />
            </>
            }
        </div>
    </>
}

const AnalysisQr = () => {

    const [fileURL, setFileURL] = useState<string>();
    const [result, setResult] = useState<string>();
    const [status, setStatus] = useState<'loading' | 'error' | 'done'>('done');

    const handleAnalysisQr = async (url: string | File) => {
        try {
            const result = await qrcodeParser(url);
            console.log(result);
            setResult(result);
            setStatus('done')
        } catch (e) {
            console.log(e);
            setStatus('error');
        }


    }

    return <div className={styles.analysisQr}>
        <div>
            <Button onClick={async () => {
                setStatus('loading');
                const result = await selectFile(".jpeg,.png,.jpg,.svg");
                if (result) {
                    const blobUrl = URL.createObjectURL(result);
                    setFileURL(blobUrl);
                    handleAnalysisQr(result);
                } else {
                    setStatus('done');
                }
            }}>选择图片</Button>
        </div>
        {!!fileURL && <Card>
            <Card.Grid style={{ width: '50%' }}> <img className={styles.img} src={fileURL} /></Card.Grid>
            <Card.Grid className={styles.text} style={{ width: '50%' }}>
                {status === 'error' && <Result title='no info' status={'error'} />}
                {status === 'loading' && <Spin size='large' className={styles.loading} />}
                {status === 'done' && result}</Card.Grid>
        </Card>}
    </div>
}

export default function Overview() {

    const navigate = useNavigate();

    return <>
        <div className={styles.container}>
            <Tabs>
                <Tabs.TabPane key={'gen-qr'} tab='gen-qr' destroyInactiveTabPane={true}>
                    <GenQr />
                </Tabs.TabPane>
                <Tabs.TabPane key={'analysis-qr'} tab='analysis-qr' destroyInactiveTabPane={true}>
                    <AnalysisQr />
                </Tabs.TabPane>
            </Tabs>
        </div>
    </>
}
