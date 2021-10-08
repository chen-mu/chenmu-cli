
import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import './index.less';

export default function CheckBox({
    status = false,
    disable = false,
    className = '',
    onChange
}) {
    const [_status, setStatus] = useState(status);
    const [_disable, setDisable] = useState(disable);

    useEffect(() => { setStatus(status); }, [status]);
    useEffect(() => { setDisable(disable); }, [disable]);
    return useMemo(() => {
        return <div onClick={() => {
            typeof onChange === 'function' && onChange(!_status);
            setStatus(!_status);
        }} className={`
        storybook-checkbox
        storybook-checkbox--normal
        ${_status ? 'storybook-checkbox--active' : ''}
        ${_disable && 'storybook-checkbox--disable'}
        ${className}
        `}></div>;
    }, [_status, className, _disable]);
} 


CheckBox.propTypes = {
  disable:PropTypes.bool.isRequired,
};