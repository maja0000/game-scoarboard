import React from 'react';
import Player from './Player';
import { Consumer } from './Context/Context';

const PlayerList = () => {
  return (
    <Consumer>
      {(context) => {
        {
          context.players.map((player, index) => (
            <Player
              {...player}
              key={player.id.toString()}
              index={index}
              removePlayer={context.removePlayer}
            />
          ));
        }
      }}
    </Consumer>
  );
};

export default PlayerList;
