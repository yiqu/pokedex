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
  const { name } = getIdNameFromIdAndNamePathCombo(gameNameId);

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
    <Stack p={ 3 } border="1px solid #eee" width="30rem" borderRadius="15px" spacing={ 1 }>
      <Box>{ state.message && <Alert severity={ state.status as any }>{ state.message }</Alert> }</Box>
      <Stack direction="row" justifyContent="start" alignItems="center" spacing={ 1 } pb={ 3 }>
        <Typography>Add a comment and rating for this game:</Typography>
      </Stack>

      <form action={ addCommentAction }>
        <Stack spacing={ 2 }>
          <HFTextField
            name="comment"
            label="Leave a comment..."
            control={ control }
            variant="standard"
            type="text"
            fullWidth
            clearField={ handleClearField }
            multiline
            rows={ 2 }
          />
          <Typography color="text.disabled">Leave a rating:</Typography>
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

          <AddCommentButton />
        </Stack>
      </form>
    </Stack>
  );
}

function AddCommentButton() {
  const { pending } = useFormStatus();

  return (
    <Stack>
      <Button type="submit" aria-disabled={ pending } variant="outlined">
        { pending ? 'Submitting...' : 'Submit' }
      </Button>
      { pending && <Typography>Adding comment...</Typography> }
    </Stack>
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
