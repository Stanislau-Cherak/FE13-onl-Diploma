import React from 'react';
import classNames from 'classnames';

import './Button.scss';

interface ButtonProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => void;
    className: string;
    disabled?: boolean;
    [propName: string]: any
}

const Button: React.FC<ButtonProps> =
    ({
        onClick,
        className,
        disabled = false,
        ...attrs
    }) => {

        const onClickAction = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
            if (disabled) {
                event.preventDefault();
            } else {
                return onClick(event);
            }
        };

        const finaleClass: string = classNames('button', className);

        const Tag = attrs.href ? 'a' : 'button';

        return (
            <Tag
                {...attrs}
                className={finaleClass}
                disabled={disabled}
                onClick={onClickAction}>
            </Tag>
        );
    };

export default Button;
