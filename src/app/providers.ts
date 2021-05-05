import {InjectionToken} from '@angular/core';

// the desc in the injection token (string in side this) function is unknown, works fine even on change
export const  lookupListToken = new InjectionToken('lookupListToken');

export const lookupLists = {mediums: ['Movies', 'Series']};
