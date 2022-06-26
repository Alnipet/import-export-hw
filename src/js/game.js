/* eslint-disable no-console */
// eslint-disable-next-line max-classes-per-file
import './domain';

export default class Game {
  // eslint-disable-next-line class-methods-use-this
  start() {
    console.log('game started');
  }
}

export class GameSavingData {}

export function readGameSaving() {}

export function writeGameSaving() {}
