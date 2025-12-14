
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

type MagAlertProps = {
  open: boolean;
  onClose: () => void;
  message: string;
  severity?: 'success' | 'error' | 'warning' | 'info';
};

export default function MagAlert({
  open,
  onClose,
  message,
  severity = 'success',
}: MagAlertProps) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
    >
      <Alert
        onClose={onClose}
        severity={severity}
        variant="filled"
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
