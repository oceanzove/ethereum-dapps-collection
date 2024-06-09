import React, { createContext, useEffect, useState } from 'react';
import ContractManager from './ContractManager';

const ContractManagerContext = createContext();

export const ContractManagerProvider = ({ children }) => {
    const [contractManager, setContractManager] = useState(null);

    useEffect(() => {
        const initContractManager = async () => {
            const manager = new ContractManager();
            await manager.init();
            setContractManager(manager);
        };

        initContractManager();
    }, []); // Пустой массив зависимостей означает, что этот эффект будет запущен только один раз при монтировании компонента

    return (
        <ContractManagerContext.Provider value={{ contractManager }}>
            {contractManager ? children : null} {/* Рендерим дочерние элементы только после того, как контракт менеджер будет инициализирован */}
        </ContractManagerContext.Provider>
    );
};

export default ContractManagerContext;
