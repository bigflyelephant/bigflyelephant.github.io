import { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import { CopyTwoTone } from '@ant-design/icons';
import styles from './index.module.scss';
import cx from 'classnames'
import { Button, message } from 'antd';
import { createPortal } from 'react-dom';
import copy from '@/utils/copy';

export default function HtmlViewer(props: { code?: string; className?: string, showCoptIcon?: boolean }) {
    const { showCoptIcon, code } = props;
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        if (ref.current) {
            Prism.highlightElement(ref.current);
        }
    }, [props.code]);



    return (
        <pre className={cx(props.className, styles.wrapper)}>
            <code ref={ref} className='language-html'>
                {props.code}
            </code>
            {showCoptIcon && <Button onClick={() => copy(code||'').then(()=>message.success('复制成功'))} shape='circle' icon={<CopyTwoTone />} className={styles.iconBtn} />}


        </pre>
    );
}