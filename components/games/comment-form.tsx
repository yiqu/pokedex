'use client';

import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'next/navigation';
import { useFormState, useFormStatus } from 'react-dom';
import HFRatingField from '@/shared/forms/hook-forms/Rating';
import HFTextField from '@/shared/forms/hook-forms/TextField';
import { getIdNameFromIdAndNamePathCombo } from '@/shared/url.utils';
import { addCommentAndRatingForGame } from '@/lib/games/games.actions';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CatchingPokemonIconFill from '@mui/icons-material/CatchingPokemon';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemonOutlined';

export default function GameDetailCommentForm() {
  const params = useParams<{ gameId: string }>();
  const gameNameId: string = params.gameId;
  const { name, id } = getIdNameFromIdAndNamePathCombo(gameNameId);

  const { control, setValue, getValues } = useForm<GameComment>({
    defaultValues: getInitFormValue(),
    shouldFocusError: true,
    //resolver: yupResolver(productSchema),
    //mode: "onChange",
  });

  const [state, addCommentAction] = useFormState(addCommentAndRatingForGame.bind(null, name), {
    status: 'idle',
    message: '',
    payload: getValues(),
  });

  const handleClearField = useCallback(
    (name: any) => {
      if (name) {
        setValue(name, '');
      }
    },
    [setValue],
  );

  return (
    <Stack width="30rem" spacing={ 0 }>
      <Box>{ state.message && <Alert severity={ state.status as any }>{ state.message }</Alert> }</Box>
      <form action={ addCommentAction }>
        <Stack spacing={ 1 }>
          <Stack direction="column" spacing={ 0.5 }>
            <Typography color="text.disabled">Overall rating</Typography>
            <HFRatingField
              name="rating"
              control={ control }
              size="medium"
              precision={ 1 }
              max={ 5 }
              icon={ <CatchingPokemonIconFill fontSize="medium" /> }
              emptyIcon={ <CatchingPokemonIcon fontSize="medium" /> }
              sx={ { color: 'primary.main' } }
            />
          </Stack>
          <HFTextField
            name="comment"
            label="Leave a comment..."
            control={ control }
            variant="outlined"
            type="text"
            fullWidth
            clearField={ handleClearField }
            multiline
            rows={ 2 }
          />
          <input name="gameId" defaultValue={ id } hidden readOnly />
          <Box>
            <AddCommentButton />
          </Box>
        </Stack>
      </form>
    </Stack>
  );
}

function AddCommentButton() {
  const { pending } = useFormStatus();

  return (
    <Box textAlign="end">
      <Button type="submit" aria-disabled={ pending } variant="outlined">
        { pending ? 'Submitting...' : 'Submit' }
      </Button>
    </Box>
  );
}

function getInitFormValue(): GameComment {
  return {
    comment: '',
    rating: 0,
  };
}

type GameComment = {
  comment: string;
  rating: number;
};
