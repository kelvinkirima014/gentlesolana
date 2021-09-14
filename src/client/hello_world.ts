/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */



/**
 * Connection to the network
 */


/**
 * Keypair associated to the fees' payer
 */

/**
 * Hello world's program id
 */

/**
 * The public key of the account we are saying hello to
 */


/**
 * Path to program files
 */


/**
 * Path to program shared object file which should be deployed on chain.
 * This file is created when running either:
 *   - `npm run build:program-c`
 *   - `npm run build:program-rust`
 */


/**
 * Path to the keypair of the deployed program.
 * This file is created when running `solana program deploy dist/program/helloworld.so`
 */

/**
 * The state of a greeting account managed by the hello world program
 */

/**
 * Borsh schema definition for greeting accounts
 */

/**
 * The expected size of each greeting account.
 */


/**
 * Establish a connection to the cluster
 */


/**
 * Establish an account to pay for everything
 */

    // Calculate the cost to fund the greeter account
    
    // If current balance is not enough to pay for fees, request an airdrop
    

/**
 * Check if the hello world BPF program has been deployed
 */

  // Read program id from keypair file
  

  // Check if the program has been deployed
  
  
  // Check if the greeting account has already been created
  
/**
 * Say hello
 */


/**
 * Report the number of times the greeted account has been said hello to
 */
