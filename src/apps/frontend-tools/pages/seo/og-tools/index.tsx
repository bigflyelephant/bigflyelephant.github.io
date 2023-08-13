import HtmlViewer from "@/apps/frontend-tools/components/html-viewer";
import copy from "@/utils/copy";
import { Button, Form, FormInstance, Input, message, Space } from "antd";
import { useRef, useState } from "react";
import styles from './index.module.scss'

function generateMeta(props: { title?: string; desc?: string; url?: string; imageUrl?: string } = {}) {
    const { title='', desc='', url='', imageUrl='' } = props;
    return `<!-- Primary Meta Tags -->
<title>${title}</title>
<meta name="title" content="${desc}" />
<meta name="description" content="${desc}" />

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content="${url}" />
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${desc}" />
<meta property="og:image" content="${imageUrl}" />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="${url}" />
<meta property="twitter:title" content="${title}" />
<meta property="twitter:description" content="${desc}" />
<meta property="twitter:image" content="${imageUrl}" />`
}

export default function OgTools() {

    const [meta, setMeta] = useState('');
    const form = useRef<FormInstance>(null);

    return <div className={styles.container}>
        <div className={styles.formWrapper}>
            <Form ref={form} layout='vertical'>
                <Form.Item label='标题' fieldId="title">
                    <Input />
                </Form.Item>
                <Form.Item label='描述' fieldId="desc">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item label='页面URL' fieldId="url">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item label='图片URL' fieldId="imageUrl">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item>
                    <div className={styles.buttons}>
                        <Button block type='primary' onClick={() => {
                            setMeta(generateMeta(form?.current?.getFieldsValue()));
                        }}>获取Meta</Button>
                        <Button block onClick={() => copy(meta).then(()=>message.success('复制成功'))}>复制</Button>
                    </div>
                </Form.Item>

            </Form>
        </div>
        <div className={styles.contentWrapper}>
            <HtmlViewer code={meta} showCoptIcon />
        </div>
    </div>
}