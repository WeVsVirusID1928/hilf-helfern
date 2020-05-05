import React from 'react'
import { FormGroup, Typography, Grid } from '@material-ui/core'
import styles from 'styles/styles'
import TextField from '@material-ui/core/TextField'
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete'

const filter = createFilterOptions()

const RegistrationExperience = ({ setChecked, tags, messageSubtitle }) => {
  const classes = styles()

  return (
    <FormGroup>
      <Typography variant="subtitle2" component="h2" className={classes.registrationTaskText}>
        {messageSubtitle}
      </Typography>
      <Grid container />
      <Autocomplete
        className={classes.registrationTextfield}
        ListboxProps={{ className: classes.registrationExperienceListBox }}
        multiple
        freeSolo
        filterSelectedOptions
        id="tags"
        options={tags}
        onChange={(event, newValue) => {
          if (typeof newValue === 'string') {
            // timeout to avoid instant validation of the dialog's form.
            setTimeout(() => {
              setChecked([...newValue])
            })
            return
          }
          setChecked([...newValue])
        }}
        disableCloseOnSelect
        filterOptions={(options, params) => {
          const filtered = filter(options, params)
          if (params.inputValue !== '') {
            filtered.push(params.inputValue)
          }
          return filtered
        }}
        getOptionLabel={(option) => {
          // e.g value selected with enter, right from the input
          if (typeof option === 'string') {
            return option
          }
          if (option.inputValue) {
            return option.inputValue
          }
          return option
        }}
        renderOption={(option, { inputValue }) => (
          <>
            {!inputValue && <>{option}</>}
            {inputValue && (
              <>
                <span className={classes.registrationExperienceAddText}>Hinzufügen:</span>
                {option}
              </>
            )}
          </>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            className={classes.registrationTextfield}
            variant="outlined"
            label="Auswählen oder Hinzufügen"
            placeholder="Erfahrungen"
          />
        )}
      />
    </FormGroup>
  )
}

export default RegistrationExperience
