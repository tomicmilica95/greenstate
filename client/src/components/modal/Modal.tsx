import React from 'react';

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
        backgroundColor: 'white'
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
  children: React.ReactNode;
  modalWidth?: false | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  disableEnforceFocus?: boolean;
  showCloseIcon?: boolean;
  className?: string;
};

export const ModalComponent: React.FC<ModalComponentProps> = ({
  message,
  isOpen,
  children,
  subtitle,
  modalWidth = 'sm',
  disableEnforceFocus = false
}) => {
  return (
    <Dialog
      open={isOpen}
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
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};
