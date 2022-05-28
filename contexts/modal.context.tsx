import React, { createContext, useContext, useMemo, useState } from 'react';
import { Modal, Portal } from 'react-native-paper';

export type IModal = React.ReactNode | React.ReactNode[];

export type IModalContext = {
  openModal: (modal: IModal) => void;
  closeModal: () => void;
};

type Props = {
  children?: React.ReactNode[];
};

export const ModalContext = createContext<IModalContext>({
  openModal: (modal: IModal) => {},
  closeModal: () => {},
});

export const useModal = () => {
  return useContext(ModalContext);
};

export const ModalProvider = ({ children }: Props) => {
  const [content, setContent] = useState<IModal>(null);

  const context = useMemo(() => {
    return {
      openModal: setContent,
      closeModal: () => setContent(null),
    };
  }, []);

  return (
    <ModalContext.Provider value={context}>
      <Portal>
        <Modal visible={Boolean(content)} onDismiss={context.closeModal}>
          {content}
        </Modal>
      </Portal>
      {children}
    </ModalContext.Provider>
  );
};
