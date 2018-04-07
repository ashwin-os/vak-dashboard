// flow weak

import React, {
  PureComponent
}                         from 'react';
import PropTypes          from 'prop-types';
import {
  AnimatedView,
  StatsCard,
  EarningGraph,
  WorkProgress,
}                         from '../../components';

class Home extends PureComponent {
  static propTypes = {
    earningGraphLabels:   PropTypes.array,
    earningGraphDatasets: PropTypes.array,
    teamMatesIsFetching:  PropTypes.bool,
    teamMates:            PropTypes.arrayOf(
      PropTypes.arrayOf({
        clientId: PropTypes.string,
        reqTime: PropTypes.string,
        timeTaken: PropTypes.string,
        cost: PropTypes.string
      })
    ),
    actions: PropTypes.shape({
      enterHome: PropTypes.func,
      leaveHome: PropTypes.func,
      fetchEarningGraphDataIfNeeded:  PropTypes.func,
      fetchTeamMatesDataIfNeeded:     PropTypes.func,
    })
  };

  componentWillMount() {
    const { actions: { enterHome } } = this.props;
    enterHome();
  }

  componentDidMount() {
    const {
      actions: {
        fetchEarningGraphDataIfNeeded,
        fetchTeamMatesDataIfNeeded
            }
    } = this.props;

    fetchEarningGraphDataIfNeeded();
    fetchTeamMatesDataIfNeeded();
  }

  componentWillUnmount() {
    const { actions: { leaveHome } } = this.props;
    leaveHome();
  }

  render() {
    const {
      teamMates,
      teamMatesIsFetching,
      earningGraphLabels,
      earningGraphDatasets
    } = this.props;

    return(
      <AnimatedView>
        <div
          className="row"
          style={{marginBottom: '5px'}}>
          <div className="col-md-3">
            <StatsCard
              statValue={'127'}
              statLabel={'Total Requests'}
              icon={<i className="fa fa-check-square-o" />}
              backColor={'red'}
            />
          </div>
          <div className="col-md-3">
            <StatsCard
              statValue={'523ms'}
              statLabel={'Avg Time'}
              icon={<i className="fa fa-clock-o" />}
              backColor={'violet'}
            />
          </div>
          <div className="col-md-3">
            <StatsCard
              statValue={'12.65'}
              statLabel={'Total Earnings'}
              icon={<i className="fa fa-dollar" />}
              backColor={'green'}
            />
          </div>
          <div className="col-md-3">
            <StatsCard
              statValue={'3'}
              statLabel={'Clients'}
              icon={<i className="fa fa-bar-chart-o" />}
              backColor={'blue'}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
          <WorkProgress content={teamMates}/>

          </div>
          <div className="col-lg-4">
          <EarningGraph
              labels={earningGraphLabels}
              datasets={earningGraphDatasets}
            />
          </div>
        </div>


      </AnimatedView>
    );
  }
}

export default Home;
