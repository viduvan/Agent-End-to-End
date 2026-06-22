#!/usr/bin/env node
/** skill-dedup.cjs — @deprecated ĐÃ TẮT từ v2.9.1 do race condition với session song song.
 *  Giữ file cho backward compatibility. Không thực thi logic.
 *  Xem: https://ai.fis.com.vn/library/hook/skill-dedup */
const fs = require('fs');
try {
  const input = fs.readFileSync(0, 'utf-8').trim();
  // DEPRECATED: Không thực thi. Xem FIS AI Kit v2.9.1 changelog.
  process.exit(0);
} catch (e) { process.exit(0); }
