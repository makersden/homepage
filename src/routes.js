/* global __PRODUCTION__ */

import React from 'react';
import { Route } from 'react-router';
import { PageContainer as PhenomicPageContainer } from 'phenomic';
import { Link } from 'phenomic';
import ReactGA from 'react-ga';

import AppContainer from './AppContainer';
import Page from './layouts/Page';
import PageError from './layouts/PageError';
import PageLoading from './layouts/PageLoading';
import Homepage from './layouts/Homepage';
import Post from './layouts/Post';
import Blog from './layouts/Blog';

let trackPage = (page) => {
  console.log('trackPage', page);
};

if (typeof (window) !== 'undefined' && __PRODUCTION__) {
  ReactGA.initialize('UA-86953911-1');

  trackPage = (page) => {
    ReactGA.set({
      page,
    });

    ReactGA.pageview(page);
  };
}

const trackRouteVisit = ({ pathname, hash }) => {
  trackPage(pathname + (hash || ''));
};

const routeChangeHandler = (prevState, nextState) => {
  trackRouteVisit(nextState.location);
  return true;
};

const routeEnterHandler = (nextState) => {
  trackRouteVisit(nextState.location);
  return true;
};

const PageContainer = props => {
  return (
  <PhenomicPageContainer
    {...props}
    layouts={{
      Page,
      PageError,
      PageLoading,
      Homepage,
      Post,
      Blog,
    }}
  />
); };

export default (
  <Route
    component={AppContainer}
    onChange={routeChangeHandler}
    onEnter={routeEnterHandler}
  >
    <Route path="*" component={PageContainer} />
  </Route>
);
