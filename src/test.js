import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';

const renderComponent = ({ count }) =>
  render(
    <StateMock state={{ count }}>
      <StatefulCounter />
    </StateMock>
  );

it('renders initial todo count', async () => {
  const { getByText } = renderComponent({ count: 5 });

  await waitForElement(() => getByText(/clicked 5 times/i));
});

it('increments count', async () => {
  const { getByText } = renderComponent({ count: 5 });

  fireEvent.click(getByText('+1'));
  await waitForElement(() => getByText(/clicked 6 times/i));
});

