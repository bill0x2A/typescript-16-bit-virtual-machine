import { createMemory } from "./createMemory";
import CPU from "./cpu";
import {
  MOV_LIT_R1,
  MOV_LIT_R2,
  ADD_REG_REG
} from './instructions';

const memory = createMemory(256);
const writeableBytes = new Uint8Array(memory.buffer);

const cpu = new CPU(memory);

writeableBytes[0] = MOV_LIT_R1;
writeableBytes[1] = 0x12;
writeableBytes[2] = 0x34;

writeableBytes[3] = MOV_LIT_R2;
writeableBytes[4] = 0xAB;
writeableBytes[5] = 0xCD;

writeableBytes[6] = ADD_REG_REG;
writeableBytes[7] = 2;
writeableBytes[8] = 3;

cpu.debug();
cpu.step();
cpu.debug();
cpu.step();
cpu.debug();
cpu.step();
cpu.debug();
