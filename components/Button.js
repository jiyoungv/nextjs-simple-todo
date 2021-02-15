import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ButtonLayout } from './styles';

Button.propTypes = {
    type: PropTypes.string,
    dataId: PropTypes.string,
    event: PropTypes.func,
    loading: PropTypes.bool,
    children: PropTypes.node,
};

function Button ({ type, dataId, event, loading, children }) {
    const [id, setId] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (loading) {
            if (id === dataId) {
                setIsLoading(true);
            }
        }

        return () => {
            setIsLoading(false);
        }
    }, [loading]);

    const onClickHandler = useCallback((e) => {
        setId(e.target.dataset.id);

        if (event) {
            event(e.target.dataset.id);
        }
    }, [event]);

    return (
        <>
        <ButtonLayout 
            type={type}
            data-id={dataId} 
            onClick={onClickHandler}
            disabled={isLoading}
            title={children}
        >
            {isLoading ? 'loading...' : children}
        </ButtonLayout>
        </>
    );
}

export default Button;