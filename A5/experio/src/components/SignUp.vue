<script setup lang="ts">
import { useRouter } from "vue-router";
import { reactive } from "vue";
import { store } from "../services/store";
import editIcon from '../assets/icons-all/edit.svg';
import personIcon from '../assets/icons-all/person-fill.svg';

const router = useRouter();

const form = reactive({
  username: '',
  name: '',
  description: '',
  email: '',
  password: '',
  avatar: null
});

function triggerFileInput() {
  document.getElementById('avatar-upload')?.click();
}

function onFileChange(e: Event) {
  const target = e.target as HTMLInputElement;
  const file = target.files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (ev) => {
        form.avatar = ev.target?.result as string;
    };
    reader.readAsDataURL(file);
  }
}

function onRectangleClick() {
  if (!form.username || !form.name) {
    alert("Please fill in at least Username and Name");
    return;
  }

  try {
    store.init(); // Ensure store is initialized
    store.signup({
      username: form.username,
      name: form.name,
      email: form.email,
      description: form.description,
      avatar: form.avatar
    });
    router.push("/le-tue-zone");
  } catch (e) {
    alert(e.message);
  }
}
</script>

<template>
  	<div class="min-h-screen w-full flex items-center justify-center bg-whitesmoke font-urbanist">
    		<div class="w-full md:w-1/3 flex flex-col gap-6 p-5">
      			<div class="flex items-center gap-4 mb-4">
					<b class="text-[2.5rem] text-black">Registrazione</b>
      			</div>
      			
                <!-- Profile Pic Upload -->
                <div class="w-full flex justify-center mb-2">
                    <div class="relative cursor-pointer group" @click="triggerFileInput">
                        <!-- Hidden Input -->
                        <input id="avatar-upload" type="file" accept="image/*" @change="onFileChange" class="hidden" />
                        
                        <!-- Avatar Display -->
                        <div class="w-[6rem] h-[6rem] rounded-full overflow-hidden border-[3px] border-darkslategray bg-white flex items-center justify-center shadow-md">
                            <img v-if="form.avatar" :src="form.avatar" class="w-full h-full object-cover" />
                            <img v-else :src="personIcon" class="w-[3rem] h-[3rem] opacity-30" />
                        </div>

                        <!-- Edit Overlay/Icon -->
                        <div class="absolute bottom-0 right-0 bg-darkslategray w-[2rem] h-[2rem] rounded-full flex items-center justify-center border-[2px] border-whitesmoke shadow-sm group-hover:scale-110 transition-transform">
                            <img :src="editIcon" class="w-[1rem] h-[1rem] filter brightness-0 invert" />
                        </div>
                    </div>
                </div>

      			<input v-model="form.username" class="w-full h-[4rem] rounded-[5px] bg-white border-darkslategray border-solid border-[2px] box-border pl-[1.5rem] font-bold placeholder-dimgray outline-none text-[0.875rem] text-dimgray" placeholder="Username" type="text" />
      			
      			<input v-model="form.name" class="w-full h-[4rem] rounded-[5px] bg-white border-darkslategray border-solid border-[2px] box-border pl-[1.5rem] font-bold placeholder-dimgray outline-none text-[0.875rem] text-dimgray" placeholder="Nome" type="text" />
      			
      			<textarea v-model="form.description" class="w-full h-[9.875rem] rounded-[5px] bg-white border-darkslategray border-solid border-[2px] box-border p-[1rem] font-bold placeholder-dimgray outline-none resize-none font-urbanist text-[0.875rem] text-dimgray" placeholder="Descrivi te stesso/a, i tuoi hobby, cosa cerchi quando viaggi (Verrà utilizzato dagli altri utenti per darti consigli)"></textarea>
      			
      			<input v-model="form.email" class="w-full h-[4rem] rounded-[5px] bg-white border-darkslategray border-solid border-[2px] box-border pl-[1.5rem] font-bold placeholder-dimgray outline-none text-[0.875rem] text-dimgray" placeholder="Email" type="email" />
      			
      			<input v-model="form.password" class="w-full h-[4rem] rounded-[5px] bg-white border-darkslategray border-solid border-[2px] box-border pl-[1.5rem] font-bold placeholder-dimgray outline-none text-[0.875rem] text-dimgray" placeholder="Password" type="password" />
      			
      			<div class="w-full h-[4rem] mt-4">
					<button class="w-full h-full shadow-[0px_4px_4px_3px_rgba(0,_0,_0,_0.25)] rounded-[5px] bg-darkslategray border-darkslategray border-solid border-[2px] box-border cursor-pointer flex items-center justify-center font-bold tracking-num-0_1 leading-[1.25rem] text-[1.125rem] text-white hover:opacity-90 transition-opacity" @click="onRectangleClick">
						Registrati
					</button>
      			</div>
    		</div>
  	</div>
</template>