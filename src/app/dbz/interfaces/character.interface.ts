export interface Character extends CharacterData{
  _id: string;
}

export interface CharacterData {
  name: string;
  power: number;
}
