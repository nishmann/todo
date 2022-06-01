import './task.css';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

function Task({ label, onDeleted, onToggleDone, done, time }) {
  let classNames = '';
  if (done) {
    classNames += 'completed';
  }
  return (
    <li className={classNames}>
      <div className="view">
        <input className="toggle" onChange={onToggleDone} type="checkbox" />
        <label>
          <span className="description" onClick={onToggleDone} onKeyDown={onToggleDone} aria-hidden="true">
            {label}
          </span>
          <span className="created">created {formatDistanceToNow(time, { includeSeconds: true })}</span>
        </label>
        <button className="icon icon-edit" type="button" />
        <button className="icon icon-destroy" type="button" onClick={onDeleted} />
      </div>
    </li>
  );
}

Task.defaultProps = {
  label: '',
  onDeleted: () => {},
  onToggleDone: () => {},
  done: false,
  time: new Date(),
};

Task.propsTypes = {
  label: PropTypes.string,
  onDeleted: PropTypes.func,
  onToggleDone: PropTypes.func,
  done: PropTypes.bool,
  time: PropTypes.number,
};

export default Task;
