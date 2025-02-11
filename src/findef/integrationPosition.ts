import { ICompleteIntegrationPosition } from "./completeIntegrationPosition"

export type IntegrationPosition = ICompleteIntegrationPosition;

export const getPositionId = (pos: ICompleteIntegrationPosition): string => {
  const name = pos.instrument?.name ? pos.instrument.name.toLowerCase() : undefined;
  const ids = [pos.instrument?.internalId, pos.instrument?.isin, name, pos.instrument?.mic, pos.instrument?.symbol].filter(it => !!it) as string[];
  return ids.filter(it => typeof it === 'string').map(id => id.trim().replace(' ', '')).join('_');
}
