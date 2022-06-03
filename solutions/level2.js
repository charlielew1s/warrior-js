class Player {
    /**
     * Plays a warrior turn.
     *
     * @param {Warrior} warrior The warrior.
     */
    playTurn(warrior) {
      if (warrior.feel().isEmpty() == false){
        warrior.attack();
      }
      else{
        warrior.walk();
      }
    }
  }
  