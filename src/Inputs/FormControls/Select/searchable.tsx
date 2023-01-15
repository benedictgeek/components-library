import * as React from 'react';
import { CustomSelectProps } from '.';
import { Input } from '../InputField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ArrowDown from '@mui/icons-material/ArrowDropDown';
import ArrowUp from '@mui/icons-material/ArrowDropUp';

export const SearchableSelect: React.FC<CustomSelectProps> = ({
  labelProps,
  label,
  // sx,
  values,
  // selected = '',
  // onChange,
  // ...props
}) => {
  const [showListItems, setShowListItems] = React.useState(false);
  const [inputBox, setInputBox] = React.useState<DOMRect>();
  const [itemsContainerBox, setitemsContainerBox] = React.useState<DOMRect>();
  const [searchContainerBox, setSearchContainerContainerBox] =
    React.useState<DOMRect>();
  const inputRef = React.useRef<HTMLInputElement>(null);
  const itemsContainerRef = React.useRef<HTMLDivElement>(null);
  const searchInputRef = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => {
    const inputRect = inputRef?.current?.getBoundingClientRect();
    const itemsContainerRect =
      itemsContainerRef?.current?.getBoundingClientRect();
    setInputBox(inputRect);
    setitemsContainerBox(itemsContainerRect);
    setSearchContainerContainerBox(
      searchInputRef?.current?.getBoundingClientRect()
    );
  }, []);

  // const activeHeight = itemsContainerBox?.height + inputBox?.bottom + 5;
  const activeHeight = (inputBox?.bottom || 0) + 20;
  let offsetTop: number | undefined = 0;
  let offsetBottom = 0;
  let totalItemsAvailableHeight = 0;

  if (activeHeight > window.innerHeight) {
    totalItemsAvailableHeight = inputBox?.top || 0;

    offsetBottom = window.innerHeight - totalItemsAvailableHeight + 5;
    offsetTop = undefined;
  } else {
    offsetTop = (inputBox?.bottom || 0) + 5;
    totalItemsAvailableHeight = window.innerHeight - offsetTop;
  }

  React.useEffect(() => {
    document.addEventListener('click', handleDocumentClick);

    return document.removeEventListener('click', handleDocumentClick);
  }, []);

  const handleDocumentClick = (e: MouseEvent) => {
    console.log('SOME CLICKSS');
    console.log(e);
    console.log(e.target);
    // setShowListItems(false);
  };

  return (
    <>
      {label && (
        <InputLabel sx={{ fontSize: '14px' }} {...labelProps}>
          {label}
        </InputLabel>
      )}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Input
          endIcon={<ArrowDown />}
          InputProps={{ readOnly: true }}
          ref={inputRef}
          onClick={() => setShowListItems(true)}
        />
        {showListItems && (
          <Box
            ref={itemsContainerRef}
            style={{
              padding: '5px',
              boxSizing: 'border-box',
              width: `${inputBox?.width}px`,
              position: 'absolute',
              bottom: offsetBottom,
              top: offsetTop,
              zIndex: 9999,
            }}
          >
            {offsetTop != undefined && (
              <Input
                ref={searchInputRef}
                style={{ width: '100%' }}
                InputProps={{ style: { height: '30px' } }}
              />
            )}
            <Box
              style={{
                overflow: 'scroll',
                maxHeight: `${
                  totalItemsAvailableHeight - (searchContainerBox?.height || 0)
                }px`,
              }}
            >
              {values.map(({ label, value }, index) => {
                return (
                  <MenuItem key={index} value={value}>
                    {label}
                  </MenuItem>
                );
              })}
            </Box>
            {offsetTop == undefined && (
              <Input
                ref={searchInputRef}
                style={{ width: '100%' }}
                InputProps={{ style: { height: '30px' } }}
              />
            )}
          </Box>
        )}
      </Box>
    </>
  );
};
