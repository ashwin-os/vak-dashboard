// @flow weak

import React, {
  PureComponent
} from 'react';
import WorkProgressPanel from './workProgressPanel/WorkProgressPanel';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCol
} from '../../components';

const headers = ['#', 'ClientId', 'Request Time', 'TimeTaken(ms)', 'Cost($)'];

export default class WorkProgress extends PureComponent {

  render() {
    return <WorkProgressPanel>
      <Table>
        <TableHeader>
          {
            headers.map(
              (header, headerIdx) => {
                return (
                  <TableCol key={headerIdx}>
                    {header}
                  </TableCol>
                );
              }
            )
          }
        </TableHeader>
        <TableBody>
          {
            this.props.content.map(
              (contentRow, contentRowIdx) => {
                return (
                  <TableRow key={contentRowIdx}>
                    {
                      contentRow.map(
                        (contentColumn, contentColumnIdx) => {
                          return (
                            <TableCol key={contentColumnIdx}>
                              {contentColumn}
                            </TableCol>
                          );
                        }
                      )
                    }
                  </TableRow>
                );
              }
            )
          }
        </TableBody>
      </Table>
    </WorkProgressPanel>
  }
}
