import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { Tradingbot } from '../target/types/tradingbot';

describe('tradingbot', () => {

  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.Tradingbot as Program<Tradingbot>;

  it('Is initialized!', async () => {
    // Add your test here.
    const tx = await program.rpc.initialize({});
    console.log("Your transaction signature", tx);
  });
});
