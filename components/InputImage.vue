<template>
  <div class="mb-4">
    <label class="mb-2 block text-sm font-medium text-gray-900" for="file_input"
      >Upload Imagem</label
    >
    <input
      @change="upload"
      name="file"
      class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
      id="file_input"
      type="file"
    />
  </div>
</template>

<script lang="ts">
import { AxiosError } from "axios";
const images: Array<string> = [];

export default {
  data() {
    return {
      images,
    };
  },
  props: {
    lead: {
      type: String,
      required: true,
    },
  },
  methods: {
    upload(event: InputEvent): void {
      const file: File | null = this.validator(event);

      if (file !== null) {
        this.request(this.createForm(file));
      }
    },
    validator(event: InputEvent): File | null {
      if (event.currentTarget === null) {
        return null;
      }

      const target: EventTarget = event.currentTarget;
      const files: FileList | null = (target as HTMLInputElement)!.files;

      if (files === null || files.length === 0) {
        return null;
      }

      const file: File | null = files.item(0);

      return file;
    },
    createForm(file: File): FormData {
      const form = new FormData();

      form.append("image", file);

      return form;
    },
    request(form: FormData) {
      this.$axios
        .post("upload", form, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(({ data }: { data: string }) => {
          this.$emit("change", {
            key: this.lead,
            value: data,
          });

          return this.images.push(data);
        })
        .catch((error: AxiosError) => {
          console.error(error);
        });
    },
  },
};
</script>
