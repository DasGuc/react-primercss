import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import centered from '@kadira/react-storybook-decorator-centered';
import withReadme from 'storybook-readme/with-readme';

import Container, { Grid } from '../../src/Layout/Container';
import Columns, { Cols } from '../../src/Layout/Columns';
import Column, { Col } from '../../src/Layout/Column';

const readme = (load, md = require('../../src/Layout/README.md')) => {
  return withReadme(md, load);
};

const columnsStyle = {
  marginBottom: 10
}

const columnStyle = {
  padding: 10,
  background: '#e7f6e0',
  border: '1px solid #c8eab9',
};

export default storiesOf('Layout', module)
  .addDecorator(centered)

  .add('Container', readme(() => (
    <Container style={{width: 500}}>
      Container here
    </Container>
  )))

  .add('Columns', readme(() => (
    <Container style={{width: 500}}>
      <Columns>
        Column here
      </Columns>
    </Container>
  )))

  .add('Grid demo', readme(() => (
    <Container style={{width: 500}}>
      <Columns style={columnsStyle}>
        <Column size="one-fifth" style={columnStyle}>
          one-fifth
        </Column>

        <Column size="four-fifths" style={columnStyle}>
          four-fifths
        </Column>
      </Columns>

      <Columns style={columnsStyle}>
        <Column size="one-fourth" style={columnStyle}>
          one-fourth
        </Column>

        <Column size="three-fourths" style={columnStyle}>
          three-fourths
        </Column>
      </Columns>

      <Columns style={columnsStyle}>
        <Column size="one-third" style={columnStyle}>
          one-third
        </Column>

        <Column size="two-thirds" style={columnStyle}>
          two-thirds
        </Column>
      </Columns>

      <Columns style={columnsStyle}>
        <Column size="one-half" style={columnStyle}>
          one-half
        </Column>

        <Column size="one-half" style={columnStyle}>
          one-half
        </Column>
      </Columns>

      <Columns style={columnsStyle}>
        <Column size="one-fifth" style={columnStyle}>
          one-fifth
        </Column>

        <Column size="one-fifth" style={columnStyle}>
          one-fifth
        </Column>

        <Column size="one-fifth" style={columnStyle}>
          one-fifth
        </Column>

        <Column size="one-fifth" style={columnStyle}>
          one-fifth
        </Column>

        <Column size="one-fifth" style={columnStyle}>
          one-fifth
        </Column>
      </Columns>

      <Columns style={columnsStyle}>
        <Column size="one-fourth" style={columnStyle}>
          one-fourth
        </Column>

        <Column size="one-fourth" style={columnStyle}>
          one-fourth
        </Column>

        <Column size="one-fourth" style={columnStyle}>
          one-fourth
        </Column>

        <Column size="one-fourth" style={columnStyle}>
          one-fourth
        </Column>
      </Columns>

      <Columns style={columnsStyle}>
        <Column size="one-third" style={columnStyle}>
          one-third
        </Column>

        <Column size="one-third" style={columnStyle}>
          one-third
        </Column>

        <Column size="one-third" style={columnStyle}>
          one-third
        </Column>
      </Columns>
    </Container>
  )))

  .add('Column centered', readme(() => (
    <Container style={{width: 500}}>
      <Columns>
        <Column size="one-half" style={columnStyle} centered>
          one-half
        </Column>
      </Columns>
    </Container>
  )))

  .add('Aliases', readme(() => (
    <Grid style={{width: 500}}>
      <Cols>
        <Col size="one-half" style={columnStyle}>
          one-half
        </Col>

        <Col size="one-half" style={columnStyle}>
          one-half
        </Col>
      </Cols>
    </Grid>
  )))
