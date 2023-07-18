// Copyright 2017-2023 @polkadot/react-hooks authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiPromise } from '@polkadot/api';
import type { ApiProps } from '@polkadot/react-api/types';

import { useContext } from 'react';

import { ApiCtx } from './ctx/Api.js';
import { createNamedHook } from './createNamedHook.js';

interface AnyObject {
  [key: string]: any;
}

function useApiImpl (): ApiProps {
  const context = useContext(ApiCtx);

  const modifyApiBySpecVersion = (chainSpecs: string, api: ApiPromise) => {
    switch (chainSpecs) {
      case '23': {
        const newApi = overrideApiKeys('events.uniques', 'events.substrateUniques', api);

        return overrideApiKeys('query.uniques', 'query.substrateUniques', newApi);
      }

      default:
        return api;
    }
  };

  const overrideApiKeys = (path: string, newPath: string, api: ApiPromise) => {
    const getObjectProperty = <T>(obj: AnyObject, propertyPath: string): T | undefined => {
      const properties = propertyPath.split('.');
      let result: unknown = obj;

      for (const property of properties) {
        if (typeof result === 'object' && result !== null) {
          result = (result as Record<string, unknown>)[property];
        } else {
          result = undefined;
          break;
        }
      }

      return result as T | undefined;
    };

    const setObjectProperty = (obj: ApiPromise, propertyPath: string, value: any) => {
      const properties = propertyPath.split('.');
      const lastProperty = properties.pop();
      let target = obj as unknown as Record<string, unknown>;

      for (const property of properties) {
        if (target[property] === undefined) {
          target[property] = {};
        }

        target = target[property] as Record<string, unknown>;
      }

      if (target && lastProperty) {
        target[lastProperty] = value;
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const method = getObjectProperty(api, newPath);

    setObjectProperty(api, path, method);

    return api;
  };

  return {
    ...context,
    api: modifyApiBySpecVersion(context.specVersion, context.api)
  };
}

export const useApi = createNamedHook('useApi', useApiImpl);
