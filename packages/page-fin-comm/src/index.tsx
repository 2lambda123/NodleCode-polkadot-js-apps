// Copyright 2017-2022 @polkadot/app-tech-comm authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react';

import App from './App';

export { default as useCounter } from './useCounter';

interface Props {
  basePath: string;
  className?: string;
}

function FinComm({ basePath, className }: Props): React.ReactElement<Props> {
  return (
    <App
      basePath={basePath}
      className={className}
      type='financialCommittee'
    />
  );
}

export default React.memo(FinComm);
