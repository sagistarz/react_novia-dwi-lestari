Hooks merupakan fitur baru di react 16.8. Denggan Hooks, kita dapat menggunakan state dan fitur react yang lain tanpa perlu menulis sebuah kelas.

Hooks dasar pada react terdiri dari useState, useEffect, useCOntext, dan Hook tambahannya meliputi useReducer, useCallback, useMemo, useRef, useImperativeHandle, useLayoutEffect, dan useDebugValue.

aturan pada hooks yang harud diikuti: hanya panggil hooks ditingkat atas, dan hanya panggil Hook dari fungsi-fungsi react.

useState adalah sebauh hooks dan akan mengembalikan nilai dari state dan fungsi yang bisa kita gunakan untuk mengubah nilai tersebut.

useEffets adalah didalam komponen biasanya kita melakukan "side effect" seperti data fetching, subscription atau berinteraksi.

Custom hooks adalah membuat hook kita sendiri memungkinkan kita mengekstrak komponen logika ke fungsi yang dapat digunakan lagi.