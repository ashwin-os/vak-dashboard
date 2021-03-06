// @flow weak

import { appConfig }    from '../../config';
import {
  earningGraphMockData,
  userInfosMockData,
  teamMatesMock,
  vaksanaStatsMock
}                       from '../../models';

export const fetchMockEarningGraphData = (
  timeToWait: number = appConfig.FAKE_ASYNC_DELAY
): Promise<any> => {
  return new Promise(
    resolve => {
      setTimeout(
        () => resolve({
          labels: earningGraphMockData.labels,
          datasets: earningGraphMockData.datasets
        }),
        timeToWait
      );
    }
  );
};

export const fetchMockUserInfosData = async (
  timeToWait: number = appConfig.FAKE_ASYNC_DELAY
): Promise<any> => {
  return new Promise(
    resolve => {
      setTimeout(
        () => resolve({ token: userInfosMockData.token, data: {...userInfosMockData}}), // { token: userInfosMockData.token, data: {...userInfosMockData}}
        timeToWait
      );
    }
  );
};

export const fetchMockTeamMatesData = (
  timeToWait: number = appConfig.FAKE_ASYNC_DELAY
): Promise<any> => {
  return new Promise(
    resolve => {
      setTimeout(
        () => resolve([...teamMatesMock]),
        timeToWait
      );
    }
  );
};

export const fetchMockVaksanaStats = (
  timeToWait: number = appConfig.FAKE_ASYNC_DELAY
): Promise<any> => {

  return fetch('http:\/\/localhost:5000/stats').then(function(response2) {
    return response2.json();
  }).then(function(myJson) {
    console.log(myJson);
    return myJson;
  });

  /*return new Promise(
    resolve => {
      setTimeout(
        () => resolve([...vaksanaStatsMock]),
        timeToWait
      );
    }
  );*/
};
