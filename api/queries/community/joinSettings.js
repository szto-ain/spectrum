// @flow
import type { DBCommunity } from 'shared/types';
import type { GraphQLContext } from '../../';

export default async (
  { id }: DBCommunity,
  _: any,
  { loaders }: GraphQLContext
) => {
  return loaders.communitySettings.load(id).then(settings => {
    return settings.joinSettings;
  });
};
