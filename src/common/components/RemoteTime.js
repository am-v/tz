import { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import produce from 'immer';
import { PlusIcon } from '@heroicons/react/outline';

import Button from 'common/components/Buttons';
import Modal from 'common/components/Modal';
import ComboBox from 'common/components/ComboBox';
import TimeCard from 'common/components/TimeCard';

const RemoteTime = ({ theme, ts }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState({
    id: '99999',
    code: '',
    name: '',
  });
  const [timezones, setTimezones] = useState([]);

  useEffect(() => {
    const tzString = localStorage.getItem('tz');
    const tzArray = JSON.parse(tzString || '[]');
    setTimezones(tzArray);
  }, []);

  const handleSubmit = () => {
    if (selectedOption) {
      const idx = timezones.findIndex((e) => e.id === selectedOption.id);
      if (idx === -1) {
        const nextState = produce(timezones, (draft) => {
          draft.push(selectedOption);
        });
        localStorage.setItem('tz', JSON.stringify(nextState));
        setTimezones(nextState);
      }
      setShowModal(false);
    }
  };

  const handleDelete = (id) => {
    const idx = timezones.findIndex((e) => e.id === id);
    if (idx !== -1) {
      const nextState = produce(timezones, (draft) => {
        draft.splice(idx, 1);
      });
      localStorage.setItem('tz', JSON.stringify(nextState));
      setTimezones(nextState);
    }
  };

  return (
    <div className="w-full py-3">
      <div className="flex w-full items-center justify-between py-3">
        <div className="flex items-center font-semibold">
          Watchlist
          <div className="ml-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm text-space">
            {timezones.length}
          </div>
        </div>
        <Button onClick={() => setShowModal(true)}>
          <PlusIcon className="h-5" />
        </Button>
      </div>
      <div className="flex w-full flex-wrap py-3">
        {timezones.map((tz) => (
          <TimeCard key={tz.id} tz={tz} handleDelete={handleDelete} ts={ts} />
        ))}
      </div>
      <MemorizedModal
        showModal={showModal}
        setShowModal={setShowModal}
        theme={theme}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export const MemorizedModal = ({
  showModal,
  setShowModal,
  theme,
  handleSubmit,
  selectedOption,
  setSelectedOption,
}) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  useMemo(
    () => (
      <Modal
        isActive={showModal}
        onClose={() => setShowModal(false)}
        title="Add New Zone"
        theme={theme}
      >
        <div className="w-full px-3 py-3 pb-16">
          <ComboBox
            selectedItem={selectedOption}
            setSelectedItem={setSelectedOption}
          />
          <div className="py-2 text-sm font-medium text-primary-light">
            Search by your timezone. (ex: IST or Indian Standard Time)
          </div>
        </div>

        <div className="flex w-full items-center justify-center py-4 px-3">
          <Button onClick={handleSubmit} className="w-3/4" primary>
            Add Zone
          </Button>
        </div>
      </Modal>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [showModal, theme, selectedOption],
  );

RemoteTime.defaultProps = {
  theme: 'dark',
};

RemoteTime.propTypes = {
  theme: PropTypes.string,
  ts: PropTypes.number.isRequired,
};

export default RemoteTime;
