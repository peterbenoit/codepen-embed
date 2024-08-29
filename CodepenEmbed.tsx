// Licensed under the ISC License (see LICENSE file for details)
import React from 'react';
import config from './.codepen-config.json';

interface CodepenEmbedProps {
    penId: string;
    height?: number;
    themeId?: string;
    defaultTab?: string;
    editable?: boolean;
    preview?: boolean;
    title?: string;
    username?: string;
}

const CodepenEmbed: React.FC<CodepenEmbedProps> = ({
    penId,
    height = config.height,
    theme = config.themeId,
    defaultTab = config.defaultTab,
    editable = config.editable,
    preview = config.preview,
    title = config.title,
    userName = config.username,
}) => {
    const editableSlug = editable ? `&editable=true` : '';
    const previewSlug = preview ? `&preview=true` : '';

    const src = `https://codepen.io/${userName}/embed/${penId}?height=${height}&theme-id=${theme}&default-tab=${defaultTab}&editable=${editable}&preview=${preview}&title=${encodeURIComponent(
        title
    )}`;

    return (
        <iframe
            height={height}
            style={{ width: '100%' }}
            scrolling="no"
            title={title}
            src={src}
            frameBorder="no"
            loading="lazy"
            allowFullScreen
        ></iframe>
    );
};

export default CodepenEmbed;
