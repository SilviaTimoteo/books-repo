import { Input, styled } from '@mui/material';

export const SearchWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  marginRight: '2em',
  marginLeft: 0,
  borderRadius: '2em',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));
export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1,
}));

export const InputBase = styled(Input)(({ theme }) => ({
  border: '#DCD6CC 1px solid',
  background: '#FFFFFF',
  borderRadius: '1em',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
        border: '0px',
      },
    },
  },
  '&:after': {
    border: '0px',
  },
}));
