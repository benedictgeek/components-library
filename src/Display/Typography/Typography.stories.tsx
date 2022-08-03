import React from 'react';
import { Meta, Story } from '@storybook/react';
import Box from '@mui/material/Box';
import {
  Body1,
  Body2,
  Subtitle1,
  Subtitle2,
  Header1,
  Header2,
  Header3,
  Header4,
  Header5,
  Header6,
} from '.';
import { ThemeProvider } from '../../ThemeProvider';

const meta: Meta = {
  title: 'Display/Typography',
  component: Body1,
};

export default meta;

const Template: Story = (args) => (
  <ThemeProvider>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header1 {...args}> Header one text </Header1>
      <Header2 {...args}> Header two text </Header2>
      <Header3 {...args}> Header three text </Header3>
      <Header4 {...args}> Header four text </Header4>
      <Header5 {...args}> Header five text </Header5>
      <Header6 {...args}> Header six text </Header6>
      <Body1 {...args}> Body text one (normal) </Body1>
      <Body2 {...args}> Body text two </Body2>
      <Subtitle1 {...args}> Subtitle one </Subtitle1>
      <Subtitle2 {...args}> Subtitle two </Subtitle2>
    </Box>
  </ThemeProvider>
);

export const Default = Template.bind({});
