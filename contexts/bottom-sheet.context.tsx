import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import React, { createContext, createRef, useCallback, useContext, useMemo, useState } from 'react';

export type IBottomSheet = React.ReactNode | React.ReactNode[];

type Props = {
  children?: React.ReactNode | React.ReactNode[];
};

interface IBottomSheetProvider {
  open: (content: IBottomSheet) => void;
  close: () => void;
}

export const bottomSheetRef = createRef<BottomSheetModal>();

export const BottomSheetContext = createContext<IBottomSheetProvider>({
  open: () => {},
  close: () => {},
});

export const useBottomSheet = () => useContext(BottomSheetContext);

export const BottomSheetProvider = ({ children }: Props) => {
  const [content, setContent] = useState<IBottomSheet>(null);

  const snapPoints = useMemo(() => ['25%', '50%', '75%'], []);

  const open = useCallback((content: any) => {
    setContent(content);
    bottomSheetRef.current?.present();
    bottomSheetRef.current?.snapToIndex(2);
  }, []);

  const close = useCallback(() => {
    setContent(null);
    bottomSheetRef.current?.collapse();
  }, []);

  const context = useMemo(
    () => ({
      open,
      close,
    }),
    []
  );

  return (
    <BottomSheetModalProvider>
      <BottomSheetContext.Provider value={context}>
        <BottomSheetModal
          index={2}
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          backdropComponent={(props) => (
            <BottomSheetBackdrop {...props} animatedIndex={{ value: 2 }} />
          )}>
          {content}
        </BottomSheetModal>
        {children}
      </BottomSheetContext.Provider>
    </BottomSheetModalProvider>
  );
};
