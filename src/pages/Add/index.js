import {
    useGetThreadsQuery,
    useAddThreadMutation
} from '../../states/features/threads';
import { useEffect, useState } from 'react';
import Layout2 from '../../components/Layout/Layout2';
import { Box, Button, FormControl, TextField } from '@mui/material';

export default function Add() {
    // init
    const defaultState = {
        title: "",
        body: "",
        category: "",
    }
    const [threadState, setThreadState] = useState(defaultState);

    const handleInputText = (e) => {
        const { target: { value, name } } = e;
        setThreadState((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }
    // const [addThread, { data, isLoading, isSuccess, isError, error }] = useAddThreadMutation();
    const [addThread, result] = useAddThreadMutation();

    const [errorText, setErrorText] = useState(defaultState);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (threadState.title === "") {
            setErrorText((prev) => ({
                ...prev,
                title: "Judul tidak boleh kosong"
            }));
        } else {
            setErrorText((prev) => ({
                ...prev,
                title: ""
            }));
        }

        if (threadState.category === "") {
            setErrorText((prev) => ({
                ...prev,
                category: "Kategori  tidak boleh kosong"
            }));
        } else {
            setErrorText((prev) => ({
                ...prev,
                category: ""
            }));
        }

        if (threadState.body === "") {
            setErrorText((prev) => ({
                ...prev,
                body: "Konten tidak boleh kosong"
            }));
        } else {
            setErrorText((prev) => ({
                ...prev,
                body: ""
            }));
        }

        try {
            const res = await addThread({
                title: threadState.title,
                body: threadState.body,
                category: threadState.category
            });
            if (res.data.status === "success") {
                alert("thread berhasil dibuat");
            }
        } catch (error) {
            alert("thread gagal dibuat")
        }
    }

    return (
        <Layout2>
            <section>
                <h3 className='title'>Buat Diskusi Baru</h3>
                <FormControl sx={{ width: '70%' }}>
                    <Box mb={3}>
                        <TextField
                            fullWidth
                            id="title"
                            name='title'
                            label="Judul"
                            variant="outlined"
                            size='small'
                            error={errorText.title === "" ? false : true}
                            helperText={errorText.title}
                            value={threadState.title} onChange={handleInputText}
                        />
                    </Box>
                    <Box mb={3}>
                        <TextField
                            fullWidth
                            id="category"
                            name='category'
                            label="Kategori"
                            variant="outlined"
                            size='small'
                            error={errorText.category === "" ? false : true}
                            helperText={errorText.category}
                            value={threadState.category} onChange={handleInputText}
                        />
                    </Box>
                    <Box mb={3}>
                        <TextField
                            fullWidth
                            id="body"
                            name="body"
                            label="Konten diskusi"
                            multiline
                            rows={4}
                            error={errorText.body === "" ? false : true}
                            helperText={errorText.body}
                            value={threadState.body} onChange={handleInputText}
                        />
                    </Box>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        className='primaryBtn'
                        onClick={handleSubmit}
                    >
                        Kirim
                    </Button>
                </FormControl>

            </section>
        </Layout2>
    )
}
