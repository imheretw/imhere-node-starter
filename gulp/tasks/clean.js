import gulp from 'gulp';
import del from 'del';
import { PATHS, DEST, ALL } from '../config';

// create clean tasks
for (const task of ALL) {
  gulp.task(`clean:${task}`, () => del([PATHS[task].dest]));
}

// clean everything!
gulp.task('clean', () => del([DEST]));

// clear cache
gulp.task('clear', done => $.cache.clearAll(done));
