import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import  { Redirect } from 'react-router-dom';

export default function Home() {
  return <Redirect to={useBaseUrl('cado/intro')} />;
}