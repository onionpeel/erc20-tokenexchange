import GrtToken from './artifacts/GrtToken.json';
import TokenExchange from './artifacts/TokenExchange.json';

const drizzleOptions = {
  contracts: [GrtToken, TokenExchange]
};

export default drizzleOptions;
