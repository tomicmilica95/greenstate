import React from 'react';
import clsx from 'clsx';

import { Dialog, DialogContent, DialogTitle as MuiDialogTitle, Typography } from '@mui/material';

type DialogTitleProps = {
  title: string;
  subtitle: string;
};

const DialogTitle = ({ title }: DialogTitleProps) => {
  return (
    <MuiDialogTitle
      sx={{
        alignItems: 'flex-start',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1.875rem',
        backgroundColor: 'red'
      }}>
      <Typography
        variant='h4'
        sx={{
          lineClamp: 2,
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}>
        {title}
      </Typography>
    </MuiDialogTitle>
  );
};

type ModalComponentProps = {
  message: string;
  subtitle: string;
  isOpen: boolean;
  onCancel: () => void;
  children: React.ReactNode;
  modalWidth?: false | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  disableEnforceFocus?: boolean;
  showCloseIcon?: boolean;
  className?: string;
};

export const ModalComponent: React.FC<ModalComponentProps> = ({
  message,
  isOpen,
  onCancel,
  children,
  subtitle,
  modalWidth = 'sm',
  disableEnforceFocus = false
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onCancel}
      aria-labelledby='dialog-title'
      fullWidth
      maxWidth={modalWidth}
      sx={{
        '& .MuiPaper-rounded': {
          borderRadius: 10
        }
      }}
      disableEnforceFocus={disableEnforceFocus}>
      <DialogTitle title={message} subtitle={subtitle} />
      <DialogContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '1.875rem'
        }}>
        {children}
      </DialogContent>
    </Dialog>
  );
};
