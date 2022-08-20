export type Handler = () => void;

import { BoxProps } from "../Box";

export interface InjectedProps {
  onDismiss?: Handler;
}

export interface ModalProps extends InjectedProps, BoxProps {
  title: string;
  hideCloseButton?: boolean;
  onBack?: () => void;
  bodyPadding?: string;
  headerBackground?: string;
  minWidth?: string;
}
