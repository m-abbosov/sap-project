import * as React from 'react';

const _navigator = React.createRef<any>();

function navigate(routeName?: string, params?: object | any) {
  if (_navigator) {
    _navigator.current.navigate(routeName, params);
  } else {
    console.warn('_navigator not found in NavigationService');
  }
}

function reset(routeName?: string, index?: number, params?: object | any) {
  if (_navigator) {
    _navigator.current.reset({
      index,
      routes: [
        {
          name: routeName,
          params,
        },
      ],
    });
  } else {
    console.warn('_navigator not found in NavigationService');
  }
}

function goBack(arg?: string) {
  if (_navigator) {
    _navigator.current.goBack(arg);
  } else {
    console.warn('_navigator not found in NavigationService');
  }
}

function setParams(obj?: string) {
  if (_navigator) {
    _navigator.current.setParams(obj);
  } else {
    console.warn('_navigator not found in NavigationService');
  }
}

export default {
  navigate,
  goBack,
  _navigator,
  reset,
  setParams,
};
