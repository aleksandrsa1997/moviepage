import STFlex from 'src/reactlibs/STFlex';
import CustomSpinner from 'src/reactlibs/CustomSpinner';

const CastPage = () => (
    <STFlex data-at='wrapper_cast-page'>
        <CustomSpinner
            size={150}
            color='primary'
            variant='indeterminate'
            thickness={5}
            disableShrink
        />
    </STFlex>
);

export default CastPage;