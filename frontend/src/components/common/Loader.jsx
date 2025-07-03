import React from 'react';
import { Spinner } from '@phosphor-icons/react';

const Loader = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <Spinner className="w-8 h-8 animate-spin" />
        </div>
    );
};

export default Loader;