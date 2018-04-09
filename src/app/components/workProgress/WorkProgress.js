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

const headers = ['Call Count', 'Success Count', 'TimeTaken(ms)', 'Cost($)'];
const keys = ['call_count', 'success_count', 'time_ms', 'cost'];


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
                      this.getRow(contentRow.stats).map(
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

  getRow(contentRow) {
    var retVal = [];
    Object.keys(keys).forEach(function(key) {
    var val = contentRow[keys[key]];
    retVal.push(val);
    });
    return retVal;
  }
}
