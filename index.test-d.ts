import {expectType} from 'tsd';
import greet from './index.js';

expectType<(name: string) => string>(greet);
