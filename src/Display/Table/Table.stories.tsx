import React, { useEffect, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import Box from '@mui/material/Box';
import { Table, CellProps, DataProps, TableProps } from '.';
import { ThemeProvider } from '../../ThemeProvider';

const meta: Meta = {
  title: 'Display/Table',
  component: Table,
  argTypes: {},
};

export default meta;

const Template: Story = (args) => {
  const headers: CellProps[] = [
    { label: 'S/N', align: 'left' },
    { label: 'Name' },
    { label: 'Email' },
    { label: 'Action' },
  ];

  const data: DataProps[] = [
    {
      TableRowProps: { style: {} },
      cells: [
        { label: '1', align: 'left' },
        { label: 'Olushola', value: 'olushola' },
        {
          label: <div>olushola251@gmail.com</div>,
          value: 'olushola251@gmail.com',
        },
        {
          label: <a href="#">delete</a>,
        },
      ],
    },
    {
      cells: [
        { label: '2', align: 'left' },
        { label: 'Haleema', value: 'haleema' },
        {
          label: <div>haleema@gmail.com</div>,
          value: 'haleema@gmail.com',
        },
        {
          label: <a href="#">delete</a>,
        },
      ],
    },
    {
      cells: [
        { label: '3', align: 'left' },
        { label: 'Dave', value: 'dave' },
        {
          label: <div>dave@gmail.com</div>,
          value: 'dave@gmail.com',
        },
        {
          label: <a href="#">delete</a>,
        },
      ],
    },
  ];
  return (
    <ThemeProvider>
      <Table headers={headers} data={data} {...args} />
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
